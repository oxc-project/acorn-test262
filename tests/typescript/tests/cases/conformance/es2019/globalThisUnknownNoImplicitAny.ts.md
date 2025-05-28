__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 43,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 23,
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 85,
      "expression": {
        "type": "MemberExpression",
        "start": 79,
        "end": 85,
        "object": {
          "type": "Identifier",
          "start": 79,
          "end": 82,
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 83,
          "end": 85,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 93,
      "expression": {
        "type": "MemberExpression",
        "start": 86,
        "end": 93,
        "object": {
          "type": "ThisExpression",
          "start": 86,
          "end": 90
        },
        "property": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 107,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 107,
        "object": {
          "type": "Identifier",
          "start": 94,
          "end": 104,
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 118,
      "expression": {
        "type": "MemberExpression",
        "start": 109,
        "end": 118,
        "object": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 113,
          "end": 117,
          "value": "hi",
          "raw": "'hi'"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 129,
      "expression": {
        "type": "MemberExpression",
        "start": 119,
        "end": 129,
        "object": {
          "type": "ThisExpression",
          "start": 119,
          "end": 123
        },
        "property": {
          "type": "Literal",
          "start": 124,
          "end": 128,
          "value": "hi",
          "raw": "'hi'"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 146,
      "expression": {
        "type": "MemberExpression",
        "start": 130,
        "end": 146,
        "object": {
          "type": "Identifier",
          "start": 130,
          "end": 140,
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 141,
          "end": 145,
          "value": "hi",
          "raw": "'hi'"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
