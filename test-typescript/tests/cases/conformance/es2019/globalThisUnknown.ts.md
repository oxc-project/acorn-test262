__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 245,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "decorators": [],
            "name": "win",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 43,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 17,
                "end": 43,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 17,
                    "end": 23,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 23,
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 26,
                    "end": 43,
                    "exprName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 43,
                      "decorators": [],
                      "name": "globalThis",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 86,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 80,
        "end": 86,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 86,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 130,
        "end": 137,
        "computed": false,
        "object": {
          "type": "ThisExpression",
          "start": 130,
          "end": 134
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 135,
          "end": 137,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 138,
        "end": 151,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 138,
          "end": 148,
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 215,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 206,
        "end": 215,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 206,
          "end": 209,
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 210,
          "end": 214,
          "raw": "'hi'",
          "value": "hi"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 226,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 216,
        "end": 226,
        "computed": true,
        "object": {
          "type": "ThisExpression",
          "start": 216,
          "end": 220
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 221,
          "end": 225,
          "raw": "'hi'",
          "value": "hi"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 243,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 227,
        "end": 243,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 227,
          "end": 237,
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 238,
          "end": 242,
          "raw": "'hi'",
          "value": "hi"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
