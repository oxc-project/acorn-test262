__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 47,
  "end": 137,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 47,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 97,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 80,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 80,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 85,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 92,
              "end": 95,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 111,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 111,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 106,
                "end": 111,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 109,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 106,
                    "end": 109,
                    "left": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 114,
            "end": 116,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 131,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 131,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 126,
                "end": 131,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 129,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 126,
                    "end": 129,
                    "left": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 134,
            "end": 136,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
