__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 16,
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    },
                    "accessibility": null,
                    "static": false
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 35,
                  "end": 37,
                  "elements": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 41,
      "end": 76,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 53,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "LogicalExpression",
        "start": 57,
        "end": 71,
        "left": {
          "type": "ChainExpression",
          "start": 57,
          "end": 65,
          "expression": {
            "type": "MemberExpression",
            "start": 57,
            "end": 65,
            "object": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "computed": false
          }
        },
        "operator": "??",
        "right": {
          "type": "ArrayExpression",
          "start": 69,
          "end": 71,
          "elements": []
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 76,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
