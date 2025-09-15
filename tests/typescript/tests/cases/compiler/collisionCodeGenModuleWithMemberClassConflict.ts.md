__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 34
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 35,
                "end": 42
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 42
          }
        ],
        "start": 13,
        "end": 44
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 52
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 61
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 64
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 64
            },
            "typeArguments": null,
            "arguments": [],
            "start": 55,
            "end": 66
          },
          "definite": false,
          "start": 49,
          "end": 66
        }
      ],
      "declare": false,
      "start": 45,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 81
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 103
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 104,
                "end": 111
              },
              "abstract": false,
              "declare": false,
              "start": 95,
              "end": 111
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 88,
            "end": 111
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 133
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 134,
                "end": 141
              },
              "abstract": false,
              "declare": false,
              "start": 124,
              "end": 141
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 117,
            "end": 141
          }
        ],
        "start": 82,
        "end": 143
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 69,
      "end": 143
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 151
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 160
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 163
              },
              "optional": false,
              "computed": false,
              "start": 158,
              "end": 163
            },
            "typeArguments": null,
            "arguments": [],
            "start": 154,
            "end": 165
          },
          "definite": false,
          "start": 148,
          "end": 165
        }
      ],
      "declare": false,
      "start": 144,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 174
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 187
              },
              "optional": false,
              "computed": false,
              "start": 181,
              "end": 187
            },
            "typeArguments": null,
            "arguments": [],
            "start": 177,
            "end": 189
          },
          "definite": false,
          "start": 171,
          "end": 189
        }
      ],
      "declare": false,
      "start": 167,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
}
```
