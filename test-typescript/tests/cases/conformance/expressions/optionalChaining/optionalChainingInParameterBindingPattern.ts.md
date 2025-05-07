__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 143,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 108,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 99,
              "end": 108,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 70,
                    "end": 83,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 81,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 81,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ]
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 143,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 142,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 139,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 137,
            "end": 139,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 112,
              "end": 132,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 114,
                  "end": 130,
                  "computed": true,
                  "key": {
                    "type": "ChainExpression",
                    "start": 115,
                    "end": 121,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 115,
                      "end": 121,
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "start": 115,
                        "end": 118,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 124,
                    "end": 130,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 128,
                      "end": 130,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
