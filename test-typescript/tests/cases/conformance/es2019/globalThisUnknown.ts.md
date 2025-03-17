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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "name": "win",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 23,
                      "name": "Window",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 26,
                    "end": 43,
                    "exprName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 43,
                      "name": "globalThis",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 86,
      "expression": {
        "type": "MemberExpression",
        "start": 80,
        "end": 86,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "name": "win",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 84,
          "end": 86,
          "name": "hi",
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
      "start": 130,
      "end": 137,
      "expression": {
        "type": "MemberExpression",
        "start": 130,
        "end": 137,
        "object": {
          "type": "ThisExpression",
          "start": 130,
          "end": 134
        },
        "property": {
          "type": "Identifier",
          "start": 135,
          "end": 137,
          "name": "hi",
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
      "start": 138,
      "end": 151,
      "expression": {
        "type": "MemberExpression",
        "start": 138,
        "end": 151,
        "object": {
          "type": "Identifier",
          "start": 138,
          "end": 148,
          "name": "globalThis",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "name": "hi",
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
      "start": 206,
      "end": 215,
      "expression": {
        "type": "MemberExpression",
        "start": 206,
        "end": 215,
        "object": {
          "type": "Identifier",
          "start": 206,
          "end": 209,
          "name": "win",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 210,
          "end": 214,
          "value": "hi",
          "raw": "'hi'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 226,
      "expression": {
        "type": "MemberExpression",
        "start": 216,
        "end": 226,
        "object": {
          "type": "ThisExpression",
          "start": 216,
          "end": 220
        },
        "property": {
          "type": "Literal",
          "start": 221,
          "end": 225,
          "value": "hi",
          "raw": "'hi'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 227,
      "end": 243,
      "expression": {
        "type": "MemberExpression",
        "start": 227,
        "end": 243,
        "object": {
          "type": "Identifier",
          "start": 227,
          "end": 237,
          "name": "globalThis",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 238,
          "end": 242,
          "value": "hi",
          "raw": "'hi'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
