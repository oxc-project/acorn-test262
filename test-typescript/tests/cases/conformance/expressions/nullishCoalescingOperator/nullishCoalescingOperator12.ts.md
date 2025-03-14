nullishCoalescingOperator12.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 25,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 11,
                "end": 25,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 13,
                    "end": 23,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 16,
                      "decorators": [],
                      "name": "arr",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 16,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 18,
                        "end": 23,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 18,
                          "end": 21
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 28,
            "end": 39,
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 37,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 35,
                  "end": 37,
                  "elements": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 41,
      "end": 76,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 53,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 53,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "LogicalExpression",
        "start": 57,
        "end": 71,
        "operator": "??",
        "left": {
          "type": "ChainExpression",
          "start": 57,
          "end": 65,
          "expression": {
            "type": "MemberExpression",
            "start": 57,
            "end": 65,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "arr",
              "optional": false
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 69,
          "end": 71,
          "elements": []
        }
      }
    }
  ],
  "sourceType": "script"
}
```
