__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "CM3M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 20
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 32,
                      "end": 33
                    },
                    "start": 25,
                    "end": 34
                  }
                ],
                "start": 23,
                "end": 35
              },
              "expression": false,
              "start": 20,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 35
          }
        ],
        "start": 9,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 333
                },
                "typeArguments": null,
                "start": 331,
                "end": 333
              },
              "start": 329,
              "end": 333
            },
            "start": 326,
            "end": 333
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 342
            },
            "typeArguments": null,
            "arguments": [],
            "start": 336,
            "end": 344
          },
          "definite": false,
          "start": 326,
          "end": 344
        }
      ],
      "declare": false,
      "start": 322,
      "end": 345
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 352
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 359
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 362,
                  "end": 363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 356,
                "end": 363
              }
            ],
            "start": 355,
            "end": 364
          },
          "definite": false,
          "start": 350,
          "end": 364
        }
      ],
      "declare": false,
      "start": 346,
      "end": 365
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
            "name": "arr_any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 380,
                  "end": 383
                },
                "start": 380,
                "end": 385
              },
              "start": 378,
              "end": 385
            },
            "start": 371,
            "end": 385
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 388,
            "end": 390
          },
          "definite": false,
          "start": 371,
          "end": 390
        }
      ],
      "declare": false,
      "start": 367,
      "end": 391
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 400
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 424,
                  "end": 428
                },
                "start": 417,
                "end": 429
              }
            ],
            "start": 415,
            "end": 430
          },
          "expression": false,
          "start": 403,
          "end": 430
        },
        "start": 393,
        "end": 430
      },
      "directive": null,
      "start": 393,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 465
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 470
        },
        "start": 458,
        "end": 470
      },
      "directive": null,
      "start": 458,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 498
}
```
