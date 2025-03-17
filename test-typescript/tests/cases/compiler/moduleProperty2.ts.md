__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 148,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 15,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 28,
              "end": 50,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 38,
                  "end": 44,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 42,
                      "end": 43,
                      "id": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 60,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 66,
            "end": 79,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 73,
              "end": 79,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 77,
                  "end": 78,
                  "id": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
          },
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 96,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 95,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "name": "test1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 101,
            "end": 113,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 105,
                "end": 112,
                "id": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 110,
                  "name": "test2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 158,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 159,
        "end": 259,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 165,
            "end": 179,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 169,
                "end": 178,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 174,
                  "name": "test3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 175,
                  "end": 178,
                  "object": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "y",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 216,
            "end": 230,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 220,
                "end": 229,
                "id": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 225,
                  "name": "test4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 226,
                  "end": 229,
                  "object": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "name": "z",
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
