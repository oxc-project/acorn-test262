__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 151,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 9,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 76,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 16,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 28,
              "end": 53,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 30,
                  "end": 40,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 33,
                      "end": 39
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 41,
                  "end": 51,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 58,
            "end": 74,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 65,
              "end": 74,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 69,
                  "end": 74,
                  "id": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 73,
                    "end": 74,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 117,
            "end": 120,
            "object": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
