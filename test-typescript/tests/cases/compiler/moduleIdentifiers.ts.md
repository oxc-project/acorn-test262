__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 52,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 52,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 29,
                  "end": 39,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 50,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 73,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 68,
                  "end": 73,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 72,
                    "end": 73,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 113,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 116,
            "end": 119,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
