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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 314,
      "end": 347,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 334,
        "end": 346,
        "raw": "\"typescript\"",
        "value": "typescript"
      },
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
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 361,
            "decorators": [],
            "name": "source",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 364,
            "end": 391,
            "raw": "\"let x: string  = 'string'\"",
            "value": "let x: string  = 'string'"
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 404,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 407,
            "end": 463,
            "arguments": [
              {
                "type": "Identifier",
                "start": 420,
                "end": 426,
                "decorators": [],
                "name": "source",
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 436,
                      "decorators": [],
                      "name": "module",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "MemberExpression",
                      "start": 438,
                      "end": 460,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 438,
                        "end": 451,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 440,
                          "decorators": [],
                          "name": "ts",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 451,
                          "decorators": [],
                          "name": "ModuleKind",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 460,
                        "decorators": [],
                        "name": "CommonJS",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 407,
              "end": 419,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 407,
                "end": 409,
                "decorators": [],
                "name": "ts",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 419,
                "decorators": [],
                "name": "transpile",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 502,
      "expression": {
        "type": "CallExpression",
        "start": 466,
        "end": 501,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 478,
            "end": 500,
            "arguments": [
              {
                "type": "Identifier",
                "start": 493,
                "end": 499,
                "decorators": [],
                "name": "result",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 478,
              "end": 492,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 478,
                "end": 482,
                "decorators": [],
                "name": "JSON",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 483,
                "end": 492,
                "decorators": [],
                "name": "stringify",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 466,
          "end": 477,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 466,
            "end": 473,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 474,
            "end": 477,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
