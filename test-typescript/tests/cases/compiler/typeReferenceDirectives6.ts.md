/ref.d.ts
```json
{
  "type": "Program",
  "start": 82,
  "end": 115,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 110,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 97,
                "end": 110,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 108,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
/types/lib/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 17,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 17,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 15,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "$",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/app.ts
```json
{
  "type": "Program",
  "start": 65,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "$",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 83,
            "end": 90,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
