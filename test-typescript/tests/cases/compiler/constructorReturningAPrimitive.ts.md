__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 203,
  "end": 380,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 258,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 258,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 256,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 228,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 228,
              "end": 256,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 256,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 241,
                    "end": 250,
                    "argument": {
                      "type": "Literal",
                      "start": 248,
                      "end": 249,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 275,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 268,
            "end": 275,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 278,
      "end": 354,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 352,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 306,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 352,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 352,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 319,
                    "end": 328,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 323,
                        "end": 327,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 327,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 324,
                            "end": 327,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 326,
                              "end": 327,
                              "typeName": {
                                "type": "Identifier",
                                "start": 326,
                                "end": 327,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 337,
                    "end": 346,
                    "argument": {
                      "type": "Identifier",
                      "start": 344,
                      "end": 345,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 288,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 287,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 364,
            "end": 379,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 369,
              "end": 377,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 370,
                  "end": 376
                }
              ]
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
