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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 112,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 209,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 208,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 203,
              "end": 208,
              "value": "120",
              "raw": "\"120\""
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
      "type": "ClassDeclaration",
      "start": 286,
      "end": 385,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 385,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 383,
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
            "value": {
              "type": "FunctionExpression",
              "start": 321,
              "end": 383,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 324,
                "end": 383,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 369,
                    "end": 377,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 369,
                      "end": 376,
                      "object": {
                        "type": "ThisExpression",
                        "start": 369,
                        "end": 373
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 376,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 443,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 442,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 437,
              "end": 442,
              "left": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 441,
                "end": 442,
                "value": 1,
                "raw": "1"
              }
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
      "type": "VariableDeclaration",
      "start": 491,
      "end": 539,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 539,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 532,
              "end": 539,
              "value": "cecil",
              "raw": "\"cecil\""
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
