__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 35,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 35,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 30,
              "end": 35,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 41,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 38,
          "end": 41
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 48,
      "end": 150,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 63,
        "end": 150,
        "decorators": [
          {
            "type": "Decorator",
            "start": 43,
            "end": 47,
            "expression": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 150,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 77,
              "end": 103,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 85,
                "end": 103,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 88,
                  "end": 103,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 90,
                      "end": 101,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 97,
                        "end": 100,
                        "object": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 108,
              "end": 120,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 125,
              "end": 131,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 130,
                "value": 1,
                "raw": "1"
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
              "start": 136,
              "end": 148,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 142,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 142,
                "end": 148,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 145,
                  "end": 148,
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
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
