__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 39,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 48
        }
      ],
      "declare": false,
      "start": 35,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "operator": "??",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 60,
            "end": 61
          },
          "start": 56,
          "end": 61
        },
        "start": 50,
        "end": 62
      },
      "directive": null,
      "start": 50,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 64,
          "end": 74
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 64,
        "end": 76
      },
      "directive": null,
      "start": 64,
      "end": 77
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 118
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 120,
                            "end": 126
                          },
                          "start": 118,
                          "end": 126
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 117,
                        "end": 126
                      }
                    ],
                    "start": 115,
                    "end": 128
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 131,
                    "end": 140
                  }
                ],
                "start": 115,
                "end": 140
              },
              "start": 113,
              "end": 140
            },
            "start": 112,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 140
        }
      ],
      "declare": true,
      "start": 98,
      "end": 141
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 154,
                            "end": 160
                          },
                          "start": 152,
                          "end": 160
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 151,
                        "end": 160
                      }
                    ],
                    "start": 149,
                    "end": 162
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 165,
                    "end": 172
                  }
                ],
                "start": 149,
                "end": 172
              },
              "start": 147,
              "end": 172
            },
            "start": 146,
            "end": 172
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 172
        }
      ],
      "declare": false,
      "start": 142,
      "end": 173
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 179
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "operator": "??",
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 187,
            "end": 191
          },
          "start": 182,
          "end": 191
        },
        "start": 178,
        "end": 191
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "directive": null,
            "start": 199,
            "end": 201
          }
        ],
        "start": 193,
        "end": 203
      },
      "alternate": null,
      "start": 174,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 204
}
```
