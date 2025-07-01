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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 55
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 69
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 74,
                          "end": 78
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 80
                        },
                        "optional": false,
                        "computed": false,
                        "start": 74,
                        "end": 80
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 83,
                        "end": 84
                      },
                      "start": 74,
                      "end": 84
                    },
                    "directive": null,
                    "start": 74,
                    "end": 85
                  }
                ],
                "start": 72,
                "end": 87
              },
              "expression": false,
              "start": 69,
              "end": 87
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 87
          }
        ],
        "start": 56,
        "end": 89
      },
      "abstract": false,
      "declare": false,
      "start": 48,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 331
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 341
          },
          "optional": false,
          "computed": false,
          "start": 330,
          "end": 341
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 347
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 349,
                "end": 350
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 346,
              "end": 350
            }
          ],
          "start": 344,
          "end": 352
        },
        "start": 330,
        "end": 352
      },
      "directive": null,
      "start": 330,
      "end": 353
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 370
            },
            "typeArguments": null,
            "arguments": [],
            "start": 365,
            "end": 372
          },
          "definite": false,
          "start": 361,
          "end": 372
        }
      ],
      "declare": false,
      "start": 355,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 374
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 376
        },
        "optional": false,
        "computed": false,
        "start": 373,
        "end": 376
      },
      "directive": null,
      "start": 373,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 378
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 380
        },
        "optional": false,
        "computed": false,
        "start": 377,
        "end": 380
      },
      "directive": null,
      "start": 377,
      "end": 380
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 48,
  "end": 380
}
```
