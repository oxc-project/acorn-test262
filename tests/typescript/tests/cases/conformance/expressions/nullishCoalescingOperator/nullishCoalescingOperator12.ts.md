__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13,
                      "end": 16
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 18,
                          "end": 21
                        },
                        "start": 18,
                        "end": 23
                      },
                      "start": 16,
                      "end": 23
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 13,
                    "end": 23
                  }
                ],
                "start": 11,
                "end": 25
              },
              "start": 9,
              "end": 25
            },
            "start": 6,
            "end": 25
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 35,
                  "end": 37
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 30,
                "end": 37
              }
            ],
            "start": 28,
            "end": 39
          },
          "definite": false,
          "start": 6,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "init": null,
            "definite": false,
            "start": 52,
            "end": 53
          }
        ],
        "declare": false,
        "start": 46,
        "end": 53
      },
      "right": {
        "type": "LogicalExpression",
        "left": {
          "type": "ChainExpression",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 65
            },
            "optional": true,
            "computed": false,
            "start": 57,
            "end": 65
          },
          "start": 57,
          "end": 65
        },
        "operator": "??",
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 69,
          "end": 71
        },
        "start": 57,
        "end": 71
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 73,
        "end": 76
      },
      "start": 41,
      "end": 76
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
