#!/usr/bin/env python3
"""
Script pour extraire les fichiers d'ActivitySwipe TypeScript depuis le CSV
Usage: python extract_typescript_files.py
"""

import csv
import os

def create_directory(path):
    """Crée les dossiers nécessaires pour un chemin de fichier"""
    dir_path = os.path.dirname(path)
    if dir_path and not os.path.exists(dir_path):
        os.makedirs(dir_path)
        print(f"📁 Créé: {dir_path}")

def extract_files():
    csv_file = "activityswipe_typescript_files.csv"

    if not os.path.exists(csv_file):
        print(f"❌ Fichier {csv_file} introuvable!")
        return

    print("🚀 Extraction des fichiers ActivitySwipe TypeScript...")
    print("🎯 Version avec type safety complète!")

    with open(csv_file, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        next(reader)  # Ignorer l'en-tête

        for row in reader:
            if len(row) >= 2:
                file_path, content = row[0], row[1]

                # Créer les dossiers si nécessaire
                create_directory(file_path)

                # Écrire le fichier
                with open(file_path, 'w', encoding='utf-8') as output_file:
                    output_file.write(content)

                print(f"✅ {file_path}")

    print(f"\n🎉 Extraction TypeScript terminée!")
    print(f"📋 Prochaines étapes:")
    print(f"   1. cd dans le dossier")
    print(f"   2. npm install")
    print(f"   3. npm run typecheck (vérifier les types)")
    print(f"   4. npm run dev")
    print(f"   5. Ouvrez http://localhost:3000")
    print(f"\n🛡️ Avantages TypeScript:")
    print(f"   • Type safety complète")
    print(f"   • Auto-complétion avancée")
    print(f"   • Détection d'erreurs en temps réel")
    print(f"   • Refactoring sûr")
    print(f"   • Maintenance simplifiée")

if __name__ == "__main__":
    extract_files()
