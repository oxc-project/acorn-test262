logicalOrExpressionIsContextuallyTyped.ts
```json
{
  "type": "Program",
  "start": 258,
  "end": 321,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 278,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 278,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 265,
                "end": 278,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 267,
                    "end": 276,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 281,
            "end": 320,
            "operator": "||",
            "left": {
              "type": "ObjectExpression",
              "start": 281,
              "end": 298,
              "properties": [
                {
                  "type": "Property",
                  "start": 283,
                  "end": 288,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 284,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 286,
                    "end": 288,
                    "raw": "''",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 290,
                  "end": 296,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 293,
                    "end": 296,
                    "raw": "123",
                    "value": 123
                  }
                }
              ]
            },
            "right": {
              "type": "ObjectExpression",
              "start": 302,
              "end": 320,
              "properties": [
                {
                  "type": "Property",
                  "start": 304,
                  "end": 309,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 307,
                    "end": 309,
                    "raw": "''",
                    "value": ""
                  }
                },
                {
                  "type": "Property",
                  "start": 311,
                  "end": 318,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 314,
                    "end": 318,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
