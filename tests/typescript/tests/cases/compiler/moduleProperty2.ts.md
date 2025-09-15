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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 46
                      },
                      "init": null,
                      "definite": false,
                      "start": 45,
                      "end": 46
                    }
                  ],
                  "declare": false,
                  "start": 41,
                  "end": 47
                }
              ],
              "start": 31,
              "end": 53
            },
            "expression": false,
            "start": 18,
            "end": 53
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "init": null,
                "definite": false,
                "start": 62,
                "end": 63
              }
            ],
            "declare": false,
            "start": 58,
            "end": 64
          },
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "init": null,
                  "definite": false,
                  "start": 80,
                  "end": 81
                }
              ],
              "declare": false,
              "start": 76,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 69,
            "end": 82
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
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 96
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                "definite": false,
                "start": 91,
                "end": 98
              }
            ],
            "declare": false,
            "start": 87,
            "end": 99
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
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 113
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 115
                },
                "definite": false,
                "start": 108,
                "end": 115
              }
            ],
            "declare": false,
            "start": 104,
            "end": 116
          }
        ],
        "start": 12,
        "end": 151
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 151
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 164
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "test3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 180
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 182
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "optional": false,
                  "computed": false,
                  "start": 181,
                  "end": 184
                },
                "definite": false,
                "start": 175,
                "end": 184
              }
            ],
            "declare": false,
            "start": 171,
            "end": 185
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
                  "name": "test4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 231
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 235
                },
                "definite": false,
                "start": 226,
                "end": 235
              }
            ],
            "declare": false,
            "start": 222,
            "end": 236
          }
        ],
        "start": 165,
        "end": 265
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 153,
      "end": 265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 265
}
```
