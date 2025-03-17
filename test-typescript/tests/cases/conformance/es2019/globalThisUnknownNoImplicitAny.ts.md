__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
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
          "name": "win",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 83,
          "end": 85,
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
          "name": "globalThis",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
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
          "name": "win",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 113,
          "end": 117,
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
        "computed": true,
        "optional": false
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
          "name": "globalThis",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 141,
          "end": 145,
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
