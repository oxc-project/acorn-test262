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
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 108,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 99,
              "end": 108,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 81,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          }
                        },
                        "accessibility": null,
                        "static": false
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 143,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 142,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 139,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 112,
              "end": 132,
              "properties": [
                {
                  "type": "Property",
                  "start": 114,
                  "end": 130,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "ChainExpression",
                    "start": 115,
                    "end": 121,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 115,
                      "end": 121,
                      "object": {
                        "type": "CallExpression",
                        "start": 115,
                        "end": 118,
                        "callee": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    }
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 124,
                    "end": 130,
                    "left": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 128,
                      "end": 130,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 137,
            "end": 139,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
