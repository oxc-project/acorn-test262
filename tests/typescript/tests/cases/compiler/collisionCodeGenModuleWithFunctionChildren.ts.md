__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 33,
                    "end": 34
                  },
                  "definite": false,
                  "start": 29,
                  "end": 34
                }
              ],
              "declare": false,
              "start": 25,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 35
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 51
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 53
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 62,
              "end": 65
            },
            "expression": false,
            "start": 40,
            "end": 65
          }
        ],
        "start": 12,
        "end": 67
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 99
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "init": null,
                      "definite": false,
                      "start": 116,
                      "end": 117
                    }
                  ],
                  "declare": false,
                  "start": 112,
                  "end": 118
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "definite": false,
                      "start": 131,
                      "end": 136
                    }
                  ],
                  "declare": false,
                  "start": 127,
                  "end": 137
                }
              ],
              "start": 102,
              "end": 143
            },
            "expression": false,
            "start": 87,
            "end": 143
          }
        ],
        "start": 81,
        "end": 145
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 69,
      "end": 145
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 158
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 200
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 222
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 225,
                              "end": 226
                            },
                            "definite": false,
                            "start": 221,
                            "end": 226
                          }
                        ],
                        "declare": false,
                        "start": 217,
                        "end": 227
                      }
                    ],
                    "start": 203,
                    "end": 237
                  },
                  "expression": false,
                  "start": 190,
                  "end": 237
                }
              ],
              "start": 180,
              "end": 243
            },
            "expression": false,
            "start": 165,
            "end": 243
          }
        ],
        "start": 159,
        "end": 245
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 147,
      "end": 245
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 245
}
```
