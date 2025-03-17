__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 91,
  "end": 369,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "name": "c11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 138,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 123,
                    "end": 132,
                    "argument": {
                      "type": "Literal",
                      "start": 130,
                      "end": 131,
                      "value": 1,
                      "raw": "1"
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
      "start": 142,
      "end": 176,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 155,
        "name": "c11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 156,
        "end": 176,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 162,
            "end": 174,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 173,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 169,
                "end": 173
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 228,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 237,
        "name": "c33",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 277,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 275,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 275,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 275,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 260,
                    "end": 269,
                    "argument": {
                      "type": "Literal",
                      "start": 267,
                      "end": 268,
                      "value": 1,
                      "raw": "1"
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
      "type": "TSEnumDeclaration",
      "start": 278,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 286,
        "name": "c33",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 289,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 292,
            "name": "One",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 287,
        "end": 294,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 289,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "One",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 294,
      "end": 295
    },
    {
      "type": "ClassDeclaration",
      "start": 318,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 327,
        "name": "c44",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 328,
        "end": 367,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 334,
            "end": 365,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 334,
              "end": 337,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 337,
              "end": 365,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 365,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 350,
                    "end": 359,
                    "argument": {
                      "type": "Literal",
                      "start": 357,
                      "end": 358,
                      "value": 1,
                      "raw": "1"
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
