__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 287,
  "end": 503,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 311,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 311,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 308,
                "end": 311
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ImportDeclaration",
      "start": 314,
      "end": 347,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 321,
          "end": 328,
          "local": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "name": "ts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 334,
        "end": 346,
        "value": "typescript",
        "raw": "\"typescript\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "name": "source",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 364,
            "end": 391,
            "value": "let x: string  = 'string'",
            "raw": "\"let x: string  = 'string'\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 463,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 404,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 407,
            "end": 463,
            "callee": {
              "type": "MemberExpression",
              "start": 407,
              "end": 419,
              "object": {
                "type": "Identifier",
                "start": 407,
                "end": 409,
                "name": "ts",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "name": "transpile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 420,
                "end": 426,
                "name": "source",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 428,
                "end": 462,
                "properties": [
                  {
                    "type": "Property",
                    "start": 430,
                    "end": 460,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 436,
                      "name": "module",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 438,
                      "end": 460,
                      "object": {
                        "type": "MemberExpression",
                        "start": 438,
                        "end": 451,
                        "object": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 440,
                          "name": "ts",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 451,
                          "name": "ModuleKind",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 460,
                        "name": "CommonJS",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 502,
      "expression": {
        "type": "CallExpression",
        "start": 466,
        "end": 501,
        "callee": {
          "type": "MemberExpression",
          "start": 466,
          "end": 477,
          "object": {
            "type": "Identifier",
            "start": 466,
            "end": 473,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 474,
            "end": 477,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 478,
            "end": 500,
            "callee": {
              "type": "MemberExpression",
              "start": 478,
              "end": 492,
              "object": {
                "type": "Identifier",
                "start": 478,
                "end": 482,
                "name": "JSON",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 483,
                "end": 492,
                "name": "stringify",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 493,
                "end": 499,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
