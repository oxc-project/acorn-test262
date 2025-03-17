__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "name": "p1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 23,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 8,
                "end": 23,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 8,
                    "end": 14
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 17,
                    "end": 23
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
      "start": 25,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 50,
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 50,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 33,
                "end": 50,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 33,
                    "end": 39
                  },
                  {
                    "type": "TSArrayType",
                    "start": 42,
                    "end": 50,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 42,
                      "end": 48
                    }
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
      "start": 52,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 76,
            "name": "p3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 76,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 60,
                "end": 76,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 60,
                    "end": 66
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 69,
                    "end": 76
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
      "type": "ClassDeclaration",
      "start": 78,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 134,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 92,
            "end": 102,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 96,
              "end": 102,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 102,
                "body": []
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
            "type": "MethodDefinition",
            "start": 107,
            "end": 117,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 110,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 111,
              "end": 117,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 117,
                "body": []
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
            "type": "MethodDefinition",
            "start": 122,
            "end": 132,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 132,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 132,
                "body": []
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
