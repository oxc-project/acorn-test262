__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "dec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "name": "target",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 34,
        "end": 37,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 36,
          "end": 37,
          "typeName": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 112,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 52,
        "end": 112,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 60,
          "end": 112,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 66,
              "end": 92,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 74,
                "end": 92,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 77,
                  "end": 92,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 79,
                      "end": 90,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 86,
                        "end": 89,
                        "object": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
            },
            {
              "type": "PropertyDefinition",
              "start": 97,
              "end": 110,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 108,
                "end": 109,
                "value": 1,
                "raw": "1"
              },
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 40,
            "end": 44,
            "expression": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 122,
            "end": 129,
            "callee": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
