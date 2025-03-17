__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 25,
            "name": "obj",
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
                      "name": "arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 35,
                  "end": 37,
                  "elements": []
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
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
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 65,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
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
