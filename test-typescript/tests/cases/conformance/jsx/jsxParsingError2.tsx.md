file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 97,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
Error1.tsx
```json
JSX element 'span' has no corresponding closing tag.
```
Error2.tsx
```json
Expected corresponding JSX closing tag for 'div'.
```
Error3.tsx
```json
JSX element 'div' has no corresponding closing tag.
```
Error4.tsx
```json
Expected corresponding JSX closing tag for 'div'.
```
Error5.tsx
```json
JSX element 'span' has no corresponding closing tag.
```
