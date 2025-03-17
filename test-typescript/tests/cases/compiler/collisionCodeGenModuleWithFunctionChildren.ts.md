__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
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
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 32,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 32,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
                    "value": 3,
                    "raw": "3"
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
          },
          {
            "type": "FunctionDeclaration",
            "start": 37,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 48,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "AssignmentPattern",
                "start": 52,
                "end": 57,
                "left": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 59,
              "end": 62,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 66,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 75,
        "end": 139,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 81,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "name": "fn2",
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
              "start": 96,
              "end": 137,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 106,
                  "end": 112,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 110,
                      "end": 111,
                      "id": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
                        "name": "M",
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
                  "type": "VariableDeclaration",
                  "start": 121,
                  "end": 131,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 125,
                      "end": 130,
                      "id": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
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
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 141,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 150,
        "end": 236,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 156,
            "end": 234,
            "id": {
              "type": "Identifier",
              "start": 165,
              "end": 168,
              "name": "fn3",
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
              "start": 171,
              "end": 234,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 181,
                  "end": 228,
                  "id": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "name": "M",
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
                    "start": 194,
                    "end": 228,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 208,
                        "end": 218,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 212,
                            "end": 217,
                            "id": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 213,
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 217,
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
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
