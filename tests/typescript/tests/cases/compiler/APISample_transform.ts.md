__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 287,
  "end": 502,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 312,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 311,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 311,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 308,
                "end": 311
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 392,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 391,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 464,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 463,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 404,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "ts",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "decorators": [],
                "name": "transpile",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 420,
                "end": 426,
                "decorators": [],
                "name": "source",
                "optional": false,
                "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 436,
                      "decorators": [],
                      "name": "module",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 451,
                          "decorators": [],
                          "name": "ModuleKind",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 460,
                        "decorators": [],
                        "name": "CommonJS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 474,
            "end": 477,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "decorators": [],
                "name": "JSON",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 483,
                "end": 492,
                "decorators": [],
                "name": "stringify",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 493,
                "end": 499,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
