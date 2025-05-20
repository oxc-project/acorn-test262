__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 731,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 111,
            "end": 112,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 195,
            "decorators": [],
            "name": "one_twenty",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 198,
            "end": 208,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 203,
              "end": 208,
              "raw": "\"120\"",
              "value": "120"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 286,
      "end": 385,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 383,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 321,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 321,
              "end": 383,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 324,
                "end": 383,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 369,
                    "end": 377,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 369,
                      "end": 376,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 369,
                        "end": 373
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 376,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 292,
        "end": 303,
        "decorators": [],
        "name": "SharedClass",
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
      "start": 418,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 429,
            "decorators": [],
            "name": "outside",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 432,
            "end": 442,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 437,
              "end": 442,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 441,
                "end": 442,
                "raw": "1",
                "value": 1
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 432,
                "end": 433,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 503,
            "decorators": [],
            "name": "noreturn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 506,
            "end": 539,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 532,
              "end": 539,
              "raw": "\"cecil\"",
              "value": "cecil"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 507,
                "end": 512,
                "decorators": [],
                "name": "barts",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 514,
                "end": 519,
                "decorators": [],
                "name": "tidus",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 521,
                "end": 527,
                "decorators": [],
                "name": "noctis",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
