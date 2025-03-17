__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 282,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 23,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 30,
        "name": "e1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 33,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
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
        "start": 31,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 33,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
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
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 61,
        "name": "e1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 91,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 77,
            "end": 89,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "name": "foo",
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
              "start": 82,
              "end": 88,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 84,
                "end": 88
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
      "type": "TSEnumDeclaration",
      "start": 142,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "name": "e2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 152,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 155,
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
        "start": 150,
        "end": 157,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 152,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
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
      "start": 157,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "start": 168,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "name": "e2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 225,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 223,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 223,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 223,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 208,
                    "end": 217,
                    "argument": {
                      "type": "Literal",
                      "start": 215,
                      "end": 216,
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
