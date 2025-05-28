__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 216,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 216,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "Rule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 216,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 119,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "regex",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 101,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": {
              "type": "NewExpression",
              "start": 104,
              "end": 118,
              "callee": {
                "type": "Identifier",
                "start": 108,
                "end": 114,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 115,
                  "end": 117,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 124,
            "end": 149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 143,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 137,
                "end": 143
              }
            },
            "value": {
              "type": "Literal",
              "start": 146,
              "end": 148,
              "value": "",
              "raw": "''"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 214,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 166,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 214,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 179,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 173,
                      "end": 179
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 214,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 191,
                    "end": 208,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 191,
                      "end": 207,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 191,
                        "end": 200,
                        "object": {
                          "type": "ThisExpression",
                          "start": 191,
                          "end": 195
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 200,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 207,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
