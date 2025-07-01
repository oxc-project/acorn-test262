__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19,
                      "end": 20
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 22,
                            "end": 28
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 31,
                            "end": 40
                          }
                        ],
                        "start": 22,
                        "end": 40
                      },
                      "start": 20,
                      "end": 40
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 19,
                    "end": 41
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 47,
                            "end": 53
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 56,
                            "end": 65
                          }
                        ],
                        "start": 47,
                        "end": 65
                      },
                      "start": 45,
                      "end": 65
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 42,
                    "end": 65
                  }
                ],
                "start": 17,
                "end": 67
              },
              "start": 15,
              "end": 67
            },
            "start": 14,
            "end": 67
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 67
        }
      ],
      "declare": true,
      "start": 0,
      "end": 68
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 91,
                            "end": 97
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 100,
                            "end": 109
                          }
                        ],
                        "start": 91,
                        "end": 109
                      },
                      "start": 89,
                      "end": 109
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 88,
                    "end": 110
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 116,
                            "end": 122
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 125,
                            "end": 134
                          }
                        ],
                        "start": 116,
                        "end": 134
                      },
                      "start": 114,
                      "end": 134
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 111,
                    "end": 134
                  }
                ],
                "start": 86,
                "end": 136
              },
              "start": 84,
              "end": 136
            },
            "start": 83,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 136
        }
      ],
      "declare": true,
      "start": 69,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 147
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 153
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 157,
              "end": 166
            },
            "start": 150,
            "end": 166
          },
          "definite": false,
          "start": 145,
          "end": 166
        }
      ],
      "declare": false,
      "start": 139,
      "end": 167
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 176
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 180
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "optional": false,
                "computed": false,
                "start": 179,
                "end": 182
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 179,
              "end": 184
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 188,
              "end": 197
            },
            "start": 179,
            "end": 197
          },
          "definite": false,
          "start": 174,
          "end": 197
        }
      ],
      "declare": false,
      "start": 168,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 207
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "optional": false,
                    "computed": false,
                    "start": 210,
                    "end": 213
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 210,
                  "end": 215
                },
                "operator": "??",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 220
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "optional": false,
                  "computed": false,
                  "start": 219,
                  "end": 222
                },
                "start": 210,
                "end": 222
              },
              "operator": "??",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "optional": false,
                  "computed": false,
                  "start": 226,
                  "end": 229
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 226,
                "end": 231
              },
              "start": 210,
              "end": 231
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 235,
              "end": 244
            },
            "start": 210,
            "end": 244
          },
          "definite": false,
          "start": 205,
          "end": 244
        }
      ],
      "declare": false,
      "start": 199,
      "end": 245
    },
    {
      "type": "EmptyStatement",
      "start": 245,
      "end": 246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
