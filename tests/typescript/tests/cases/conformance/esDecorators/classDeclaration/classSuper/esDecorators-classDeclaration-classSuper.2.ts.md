__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 462,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ClassDeclaration",
      "start": 86,
      "end": 160,
      "decorators": [
        {
          "type": "Decorator",
          "start": 86,
          "end": 90,
          "expression": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 99,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "start": 108,
        "end": 117,
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 114,
          "end": 117,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 160,
        "body": [
          {
            "type": "StaticBlock",
            "start": 124,
            "end": 158,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 141,
                "end": 152,
                "expression": {
                  "type": "MemberExpression",
                  "start": 141,
                  "end": 151,
                  "object": {
                    "type": "Super",
                    "start": 141,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 151,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 228,
      "end": 315,
      "decorators": [
        {
          "type": "Decorator",
          "start": 228,
          "end": 232,
          "expression": {
            "type": "Identifier",
            "start": 229,
            "end": 232,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 241,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "start": 251,
        "end": 271,
        "expression": {
          "type": "FunctionExpression",
          "start": 251,
          "end": 264,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 262,
            "end": 264,
            "body": []
          },
          "expression": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 268,
          "end": 271
        }
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 273,
        "end": 315,
        "body": [
          {
            "type": "StaticBlock",
            "start": 279,
            "end": 313,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 296,
                "end": 307,
                "expression": {
                  "type": "MemberExpression",
                  "start": 296,
                  "end": 306,
                  "object": {
                    "type": "Super",
                    "start": 296,
                    "end": 301
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 306,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 378,
      "end": 462,
      "decorators": [
        {
          "type": "Decorator",
          "start": 378,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 379,
            "end": 382,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "start": 401,
        "end": 418,
        "expression": {
          "type": "ArrowFunctionExpression",
          "start": 402,
          "end": 410,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 408,
            "end": 410,
            "body": []
          },
          "id": null,
          "generator": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 415,
          "end": 418
        }
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 420,
        "end": 462,
        "body": [
          {
            "type": "StaticBlock",
            "start": 426,
            "end": 460,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 443,
                "end": 454,
                "expression": {
                  "type": "MemberExpression",
                  "start": 443,
                  "end": 453,
                  "object": {
                    "type": "Super",
                    "start": 443,
                    "end": 448
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 453,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
