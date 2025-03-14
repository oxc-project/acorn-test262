constDeclarationShadowedByVarDeclaration3.ts
```json
{
  "type": "Program",
  "start": 65,
  "end": 217,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 217,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 120,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 94,
              "decorators": [],
              "name": "regex",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 102,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 105,
              "end": 119,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 116,
                  "end": 118,
                  "raw": "''",
                  "value": ""
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 109,
                "end": 115,
                "decorators": [],
                "name": "RegExp",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 150,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 144,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              }
            },
            "value": {
              "type": "Literal",
              "start": 147,
              "end": 149,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 215,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 167,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 215,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 215,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 192,
                    "end": 209,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 192,
                      "end": 208,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 192,
                        "end": 201,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 192,
                          "end": 196
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 201,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 208,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 168,
                  "end": 180,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 174,
                      "end": 180
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "Rule",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
