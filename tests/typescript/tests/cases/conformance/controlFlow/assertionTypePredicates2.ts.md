__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 139,
  "end": 334,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 243,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 242,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 148,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 242,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 158,
              "end": 242,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 164,
                  "end": 218,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 187,
                    "end": 198,
                    "left": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 192,
                      "object": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 197,
                      "end": 198,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "ThrowStatement",
                    "start": 200,
                    "end": 218,
                    "argument": {
                      "type": "CallExpression",
                      "start": 206,
                      "end": 217,
                      "callee": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 215,
                        "decorators": [],
                        "name": "TypeError",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 223,
                  "end": 240,
                  "argument": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 239,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 245,
      "end": 334,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 252,
        "end": 334,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 258,
            "end": 333,
            "id": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "main",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 265,
              "end": 333,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 271,
                "end": 333,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 300,
                    "end": 319,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 306,
                        "end": 318,
                        "id": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 310,
                          "end": 318,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 312,
                              "end": 316,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 312,
                                "end": 313,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 315,
                                "end": 316,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 324,
                    "end": 331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 324,
                      "end": 330,
                      "callee": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 327,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 328,
                          "end": 329,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
