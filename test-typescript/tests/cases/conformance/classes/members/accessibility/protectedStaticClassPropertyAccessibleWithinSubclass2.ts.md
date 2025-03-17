__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 601,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 147,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 68,
              "name": "staticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 147,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 88,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 87,
                      "object": {
                        "type": "ThisExpression",
                        "start": 81,
                        "end": 85
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 151,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 165,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 178,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 357,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 355,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 205,
              "name": "staticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 205,
              "end": 355,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 355,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 218,
                    "end": 225,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 218,
                      "end": 224,
                      "object": {
                        "type": "ThisExpression",
                        "start": 218,
                        "end": 222
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 316,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 308,
                      "end": 315,
                      "object": {
                        "type": "Super",
                        "start": 308,
                        "end": 313
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
      "type": "ClassDeclaration",
      "start": 359,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 373,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 382,
        "end": 390,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 391,
        "end": 601,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 397,
            "end": 424,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 423,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 417,
                "end": 423
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 429,
            "end": 599,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 449,
              "name": "staticMethod3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 449,
              "end": 599,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 599,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 462,
                    "end": 469,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 462,
                      "end": 468,
                      "object": {
                        "type": "ThisExpression",
                        "start": 462,
                        "end": 466
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 467,
                        "end": 468,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 552,
                    "end": 560,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
