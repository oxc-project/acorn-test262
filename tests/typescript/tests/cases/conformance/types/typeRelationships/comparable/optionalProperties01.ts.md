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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 36,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 27,
              "decorators": [],
              "name": "required1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "decorators": [],
              "name": "required2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 50,
                "end": 56
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 78,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 68,
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 125,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 124,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 106,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 108,
                    "end": 115,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 121,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 121,
                "end": 124,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 186,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 185,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 150,
                    "decorators": [],
                    "name": "required1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 152,
                    "end": 159,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 161,
                  "end": 176,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 169,
                    "decorators": [],
                    "name": "optional",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 171,
                    "end": 176,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 182,
              "end": 185,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 185,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
