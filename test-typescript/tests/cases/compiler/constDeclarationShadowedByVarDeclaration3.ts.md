__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "name": "Rule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 76,
        "end": 217,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 82,
            "end": 120,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 94,
              "name": "regex",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 105,
              "end": 119,
              "callee": {
                "type": "Identifier",
                "start": 109,
                "end": 115,
                "name": "RegExp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 116,
                  "end": 118,
                  "value": "",
                  "raw": "''"
                }
              ],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "RegExp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 150,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 147,
              "end": 149,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 215,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 167,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 215,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 168,
                  "end": 180,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 174,
                      "end": 180
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 192,
                          "end": 196
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 201,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 208,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
