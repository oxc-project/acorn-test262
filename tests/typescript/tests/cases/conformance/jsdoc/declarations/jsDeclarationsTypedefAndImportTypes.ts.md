__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 113,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Conn",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 113,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 81,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 81,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 81,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 95,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 93,
              "end": 94,
              "value": 3,
              "raw": "3"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 111,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 106,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 111,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 111,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 129,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 121,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 136,
          "decorators": [],
          "name": "Conn",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 265,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 233,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 231,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 231,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 231,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 149,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 139,
                        "object": {
                          "type": "ThisExpression",
                          "start": 126,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 139,
                          "decorators": [],
                          "name": "connItem",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 142,
                        "end": 148,
                        "object": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 148,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 207,
                    "end": 225,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 207,
                      "end": 224,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 207,
                        "end": 219,
                        "object": {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 219,
                          "decorators": [],
                          "name": "another",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 222,
                        "end": 224,
                        "value": "",
                        "raw": "\"\""
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
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 265,
      "expression": {
        "type": "AssignmentExpression",
        "start": 235,
        "end": 264,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 235,
          "end": 249,
          "object": {
            "type": "Identifier",
            "start": 235,
            "end": 241,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 249,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 252,
          "end": 264,
          "properties": [
            {
              "type": "Property",
              "start": 258,
              "end": 262,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 262,
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 258,
                "end": 262,
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
