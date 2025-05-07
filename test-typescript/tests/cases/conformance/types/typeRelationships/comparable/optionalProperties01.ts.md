__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 80,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 27,
              "decorators": [],
              "name": "required1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 57,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "decorators": [],
              "name": "required2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 78,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 68,
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 92,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 95,
            "end": 124,
            "expression": {
              "type": "ObjectExpression",
              "start": 95,
              "end": 117,
              "properties": [
                {
                  "type": "Property",
                  "start": 97,
                  "end": 115,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 106,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 108,
                    "end": 115,
                    "raw": "\"hello\"",
                    "value": "hello",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 124,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 124,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 139,
            "end": 185,
            "expression": {
              "type": "ObjectExpression",
              "start": 139,
              "end": 178,
              "properties": [
                {
                  "type": "Property",
                  "start": 141,
                  "end": 159,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 150,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 152,
                    "end": 159,
                    "raw": "\"hello\"",
                    "value": "hello",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 161,
                  "end": 176,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 169,
                    "decorators": [],
                    "name": "optional",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 171,
                    "end": 176,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 182,
              "end": 185,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 185,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
