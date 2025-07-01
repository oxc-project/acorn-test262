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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 20,
                          "end": 23
                        },
                        "start": 20,
                        "end": 23
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 25,
                        "end": 31
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    ],
                    "start": 19,
                    "end": 40
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 44,
                          "end": 47
                        },
                        "start": 44,
                        "end": 47
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 49,
                        "end": 55
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 57,
                        "end": 64
                      }
                    ],
                    "start": 43,
                    "end": 65
                  }
                ],
                "start": 19,
                "end": 65
              },
              "start": 17,
              "end": 65
            },
            "start": 14,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 65
        }
      ],
      "declare": true,
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 88
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 101
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 104,
                        "end": 110
                      },
                      "start": 102,
                      "end": 110
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 96,
                    "end": 110
                  }
                ],
                "start": 94,
                "end": 112
              },
              "start": 92,
              "end": 112
            },
            "start": 89,
            "end": 112
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 131
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 131
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 134,
                            "end": 135
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 135
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 126,
                        "end": 135
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 137
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 143
                  },
                  "definite": false,
                  "start": 124,
                  "end": 143
                }
              ],
              "declare": false,
              "start": 118,
              "end": 144
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 155
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 161
                  },
                  "optional": false,
                  "computed": true,
                  "start": 152,
                  "end": 162
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 167,
                  "end": 170
                },
                "start": 152,
                "end": 170
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 181
                    },
                    "directive": null,
                    "start": 178,
                    "end": 182
                  }
                ],
                "start": 172,
                "end": 186
              },
              "alternate": null,
              "start": 148,
              "end": 186
            }
          ],
          "start": 114,
          "end": 188
        },
        "expression": false,
        "start": 75,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```
