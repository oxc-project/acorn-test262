__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 30
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 36
            },
            "initializer": null,
            "computed": false,
            "start": 33,
            "end": 36
          }
        ],
        "start": 31,
        "end": 38
      },
      "const": false,
      "declare": false,
      "start": 23,
      "end": 38
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e1",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 61
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 84,
                "end": 88
              },
              "start": 82,
              "end": 88
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 77,
            "end": 89
          }
        ],
        "start": 62,
        "end": 91
      },
      "declare": false,
      "start": 49,
      "end": 91
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 155
            },
            "initializer": null,
            "computed": false,
            "start": 152,
            "end": 155
          }
        ],
        "start": 150,
        "end": 157
      },
      "const": false,
      "declare": false,
      "start": 142,
      "end": 157
    },
    {
      "type": "EmptyStatement",
      "start": 157,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 215,
                      "end": 216
                    },
                    "start": 208,
                    "end": 217
                  }
                ],
                "start": 198,
                "end": 223
              },
              "expression": false,
              "start": 195,
              "end": 223
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 223
          }
        ],
        "start": 177,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 168,
      "end": 225
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 282
}
```
