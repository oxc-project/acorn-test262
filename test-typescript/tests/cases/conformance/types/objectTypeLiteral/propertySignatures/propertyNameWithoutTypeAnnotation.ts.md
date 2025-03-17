__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 20,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 18,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 67,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 55,
                "end": 67,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 61,
                    "end": 65,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 64,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 83,
                "end": 92,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 88,
                  "end": 92,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 142,
            "end": 155,
            "object": {
              "type": "NewExpression",
              "start": 143,
              "end": 150,
              "callee": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 166,
            "end": 179,
            "object": {
              "type": "TSTypeAssertion",
              "start": 167,
              "end": 174,
              "expression": {
                "type": "Literal",
                "start": 170,
                "end": 174,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 187,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 190,
            "end": 195,
            "object": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 206,
            "end": 211,
            "object": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 208,
              "end": 211,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
