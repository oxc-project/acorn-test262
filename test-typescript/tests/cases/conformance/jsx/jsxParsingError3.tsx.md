file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 103,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 103,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 46,
            "end": 101,
            "body": {
              "type": "TSInterfaceBody",
              "start": 74,
              "end": 101,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 80,
                  "end": 97,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 81,
                      "end": 90,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 82,
                        "end": 90,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 84,
                          "end": 90
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 73,
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
Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
```
Error2.tsx
```json
Unexpected token. Did you mean `{'>'}` or `&gt;`?
```
Error3.tsx
```json
Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
```
Error4.tsx
```json
Unexpected token. Did you mean `{'>'}` or `&gt;`?
```
Error5.tsx
```json
Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
```
Error6.tsx
```json
Unexpected token. Did you mean `{'>'}` or `&gt;`?
```
