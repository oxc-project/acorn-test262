__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 499,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "decorators": [],
              "name": "CM3M1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 35,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 25,
                    "end": 34,
                    "argument": {
                      "type": "Literal",
                      "start": 32,
                      "end": 33,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 333,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 333,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 333,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 336,
            "end": 344,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 340,
              "end": 342,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 355,
            "end": 364,
            "properties": [
              {
                "type": "Property",
                "start": 356,
                "end": 363,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 359,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 362,
                  "end": 363,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 367,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 385,
            "decorators": [],
            "name": "arr_any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 378,
              "end": 385,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 380,
                "end": 385,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 380,
                  "end": 383
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 388,
            "end": 390,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 430,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 393,
          "end": 400,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 403,
          "end": 430,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 415,
            "end": 430,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 417,
                "end": 429,
                "argument": {
                  "type": "Literal",
                  "start": 424,
                  "end": 428,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 471,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 458,
          "end": 465,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 468,
          "end": 470,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
