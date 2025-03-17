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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "name": "CM3M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 333,
            "name": "c3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 333,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 333,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "name": "C3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 336,
            "end": 344,
            "callee": {
              "type": "Identifier",
              "start": 340,
              "end": 342,
              "name": "C3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 352,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 359,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 362,
                  "end": 363,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 385,
            "name": "arr_any",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 388,
            "end": 390,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 430,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 393,
          "end": 400,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 403,
          "end": 430,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "value": null,
                  "raw": "null"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 471,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 458,
          "end": 465,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 468,
          "end": 470,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
