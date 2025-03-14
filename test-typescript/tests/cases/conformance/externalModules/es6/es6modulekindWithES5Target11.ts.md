es6modulekindWithES5Target11.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 35,
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
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
          }
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
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 48,
      "end": 150,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 63,
        "end": 150,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 150,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 77,
              "end": 103,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 85,
                "end": 103,
                "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 100,
                          "decorators": [],
                          "name": "y",
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
                "params": []
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 108,
              "end": 120,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 125,
              "end": 131,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "p",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 129,
                "end": 130,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "MethodDefinition",
              "start": 136,
              "end": 148,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 142,
                "decorators": [],
                "name": "method",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 142,
                "end": 148,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 145,
                  "end": 148,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
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
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
