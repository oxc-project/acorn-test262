declarationEmitClassMemberNameConflict2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Bar",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 17,
            "raw": "'bar'",
            "value": "bar"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 20,
      "end": 44,
      "body": {
        "type": "TSEnumBody",
        "start": 31,
        "end": 44,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 42,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "World",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 30,
        "decorators": [],
        "name": "Hello",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 46,
      "end": 72,
      "body": {
        "type": "TSEnumBody",
        "start": 58,
        "end": 72,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 64,
            "end": 70,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 70,
              "decorators": [],
              "name": "World1",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 57,
        "decorators": [],
        "name": "Hello1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 244,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 244,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 133,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 170,
            "end": 184,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 175,
              "decorators": [],
              "name": "Hello",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 178,
              "end": 183,
              "decorators": [],
              "name": "Hello",
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 226,
            "end": 242,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 232,
              "decorators": [],
              "name": "Hello2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 235,
              "end": 241,
              "decorators": [],
              "name": "Hello1",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
